import { type ReactNode } from "react";
import {
  NumberInput,
  SelectInput,
  TextInput,
  TitleInput,
} from "shared/ui/inputs";
import { datesOptions, materialOptions } from "entities/Toy/constants";
import type { ToyQuery } from "../types";
import { AiOutlineSearch } from "react-icons/ai";

type ToyFilterFormProps = {
  query: ToyQuery | null;
  setQuery: (newQuery: ToyQuery) => void;
};

const ToyFilterForm = ({ query, setQuery }: ToyFilterFormProps) => {
  return (
    <form
      className="mt-10 flex w-full flex-col gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="pl-5 pr-6 pb-5">
        <div className="mb-5 flex flex-col gap-3">
          <div className="flex items-center justify-center gap-3">
            <AiOutlineSearch className="text-2xl" />

            <h2 className="translate-y-[3px] text-center font-h text-2xl">
              Поиск
            </h2>
          </div>

          <TitleInput
            value={query?.q || ""}
            onChange={(e) =>
              setQuery({
                ...query,
                q: e.target.value,
              })
            }
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-center font-h text-2xl">Фильтры</h2>

          <div className="grid grid-cols-description gap-3 text-end">
            <Label name="Тип">
              <SelectInput
                id="type"
                options={materialOptions}
                value={query?.type || ""}
                onChange={(e) =>
                  setQuery({
                    ...query,
                    type: e.target.value,
                  })
                }
              />
            </Label>

            <Label name="Материал">
              <TextInput
                id="material"
                value={query?.material || ""}
                onChange={(e) =>
                  setQuery({
                    ...query,
                    material: e.target.value,
                  })
                }
              />
            </Label>

            <Label name="Годы">
              <SelectInput
                id="dates"
                options={datesOptions}
                value={query?.dates || ""}
                onChange={(e) =>
                  setQuery({
                    ...query,
                    dates: e.target.value,
                  })
                }
              />
            </Label>

            <Label name="Категория">
              <TextInput
                id="category"
                value={query?.category || ""}
                onChange={(e) =>
                  setQuery({
                    ...query,
                    category: e.target.value,
                  })
                }
              />
            </Label>

            <Label name="Коробка">
              <NumberInput
                id="box"
                value={query?.box}
                onChange={(e) =>
                  setQuery({
                    ...query,
                    box: +e.target.value,
                  })
                }
              />
            </Label>
          </div>
        </div>
      </div>
    </form>
  );
};

const Label = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <>
      <div className="text-green-500">{`${name} :`}</div>
      {children}
    </>
  );
};

export default ToyFilterForm;
