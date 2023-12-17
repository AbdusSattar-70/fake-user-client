import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import UsersTable from "./UsersTable";
import UsersTableSkeleton from "./UserTableSkeleton";
import { fetchUsers } from "../../utils/fetchUsers";
import { Spinner } from "./Spinner";
import { FakeUsers, FetchUsersOptions } from "../../../types";
import UsersAction from "./UsersAction";
import { generateRandomSeed } from "../../utils/generateRandomSeed";
import fakerLocale from "../../utils/fakerLocale";

const LoadUserByPage = () => {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(0);
  const [seed, setSeed] = useState(0);
  const [region, setRegion] = useState(fakerLocale.English);
  const [errorRate, setErrorRate] = useState(0);
  const [usersData, setUsersData] = useState<FakeUsers[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const nextPage = (page % 9) + 1;

  const options: FetchUsersOptions = {
    seed,
    region,
    errorRate,
    batch: page * 10 + 20,
  };

  const loadMoreUsers = async () => {
    setLoading(true);
    const newUsers = (await fetchUsers(options)) ?? [];
    setUsersData(newUsers);
    setLoading(false);
  };

  useEffect(() => {
    loadMoreUsers();
  }, []);

  useEffect(() => {
    if (inView) {
      loadMoreUsers();
      setPage(nextPage);
    }
  }, [inView]);

  useEffect(() => {
    if (seed || region || errorRate) {
      loadMoreUsers();
    }
  }, [errorRate, seed, region]);

  const handleRandomSeed = () => {
    const rs = generateRandomSeed();
    setSeed(rs);
  };

  const submitSeedInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { seed } = e.target;
    setSeed(parseInt(seed.value, 10));
  };

  const handleRegionChange = (selectedRegion: string) => {
    setRegion(selectedRegion);
  };

  const handleErrSlider = (value: number) => {
    setErrorRate(value);
  };

  const submitErrInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { errorRate } = e.target;
    setErrorRate(parseInt(errorRate.value, 10));
  };

  return (
    <>
      {loading ? (
        <UsersTableSkeleton />
      ) : (
        <div className="space-y-6">
          <UsersAction
            region={region}
            errorRate={errorRate}
            seed={seed}
            handleErrSlider={handleErrSlider}
            submitErrInput={submitErrInput}
            handleRegionChange={handleRegionChange}
            handleRandomSeed={handleRandomSeed}
            submitSeedInput={submitSeedInput}
            usersData={usersData}
          />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <UsersTable usersData={usersData} />
          </div>
          <div
            className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
            ref={ref}
          >
            <Spinner />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadUserByPage;
