import React from "react";
import fakerLocale from "../../utils/fakerLocale";
import { exportToCSV } from "../../utils/exportToCSV";
import { FakeUsers } from "../../../types";

interface UsersActionProps {
  seed: number;
  region: string;
  errorRate: number;
  handleRegionChange: (val: string) => void;
  handleErrSlider: (val: number) => void;
  submitErrInput: (e: React.FormEvent<HTMLFormElement>) => void;
  submitSeedInput: (e: React.FormEvent<HTMLFormElement>) => void;
  handleRandomSeed: () => void;
  usersData: FakeUsers[];
}

const UsersAction: React.FC<UsersActionProps> = ({
  seed,
  region,
  errorRate,
  usersData,
  handleRandomSeed,
  submitSeedInput,
  handleRegionChange,
  handleErrSlider,
  submitErrInput,
}) => {
  return (
    <>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-4">
        {/* Error rate input field */}
        <div className="flex flex-col gap-2">
          <form onSubmit={submitErrInput} className="flex flex-col gap-2">
            <label htmlFor="errorRate" className="text-xl text-purple-800">
              Error:
            </label>
            <input
              id="errorRate"
              type="number"
              name="errorRate"
              autoComplete="false"
              placeholder="Enter error rate"
              className="input input-bordered input-info w-full"
              defaultValue={errorRate}
            />
          </form>

          {/* Error rate slider */}
          <div>
            <label
              htmlFor="errorRate"
              className="text-xl text-purple-800 sr-only"
            >
              Error:
            </label>
            <input
              type="range"
              name="errorRate"
              autoComplete="false"
              id="errorRate"
              className="range range-accent w-full"
              min={0}
              max={1000}
              value={errorRate}
              onChange={(e) => handleErrSlider(parseInt(e.target.value, 10))}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <form onSubmit={submitSeedInput} className="flex flex-col gap-2">
            <label htmlFor="seed" className="text-xl text-purple-800">
              Seed:
            </label>
            <input
              type="number"
              name="seed"
              id="seed"
              autoComplete="false"
              placeholder="Enter Seed Value"
              className="input input-bordered input-info w-full"
              defaultValue={seed}
            />
          </form>
          <button
            onClick={handleRandomSeed}
            className="btn btn-outline btn-primary"
            type="button"
            aria-label="Random Seed"
          >
            Random Seed
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="region" className="text-xl text-purple-800">
              Region
            </label>
            <select
              name="region"
              value={region}
              className="select select-bordered  w-full"
              onChange={(e) => handleRegionChange(e.target.value)}
            >
              <option value="" disabled>
                Choose Region
              </option>
              {Object.entries(fakerLocale).map(([name, code]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => exportToCSV(usersData)}
            className="btn btn-outline btn-primary"
            type="button"
            aria-label="Export to CSV"
          >
            Export to CSV
          </button>
        </div>
      </section>
    </>
  );
};

export default UsersAction;
