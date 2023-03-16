import {
  NumberInput,
  SelectInput,
  TextAreaInput,
  TextInput,
  TitleInput,
} from "shared/ui/inputs";
import ImageSlider from "./ImageSlider";
import { datesOptions, materialOptions } from "entities/Toy/constants";
import { type Image } from "@prisma/client";
import { type ReactNode } from "react";

export type ToyTmp = {
  title?: string | null;
  type?: string | null;
  material?: string | null;
  dates?: string | null;
  category?: string | null;
  size?: number | null;
  description?: string | null;
  box?: number | null;
  photos?: Image[];
};

type ToyEditFormProps = {
  toyTmp: ToyTmp;
  setToyTmp: (newToy: ToyTmp) => void;
};

const ToyEditForm = ({ toyTmp, setToyTmp }: ToyEditFormProps) => {
  return (
    <form
      className="flex w-full flex-col gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      {toyTmp && toyTmp.photos ? (
        <ImageSlider photos={toyTmp.photos} />
      ) : (
        <div className="h-[350px] w-full" />
      )}

      {/* <input type="file" multiple accept="image/*" /> */}
      <div className="pl-5 pr-6 pb-5">
        <TitleInput
          value={toyTmp?.title || ""}
          onChange={(e) => setToyTmp({ ...toyTmp, title: e.target.value })}
        />

        <div className="grid grid-cols-description gap-3 text-end">
          <Label name="Тип">
            <SelectInput
              id="type"
              options={materialOptions}
              value={toyTmp?.type || ""}
              onChange={(e) => setToyTmp({ ...toyTmp, type: e.target.value })}
            />
          </Label>

          <Label name="Материал">
            <TextInput
              id="material"
              value={toyTmp?.material || ""}
              onChange={(e) =>
                setToyTmp({ ...toyTmp, material: e.target.value })
              }
            />
          </Label>

          <Label name="Годы">
            <SelectInput
              id="dates"
              options={datesOptions}
              value={toyTmp?.dates || ""}
              onChange={(e) => setToyTmp({ ...toyTmp, dates: e.target.value })}
            />
          </Label>

          <Label name="Категория">
            <TextInput
              id="category"
              value={toyTmp?.category || ""}
              onChange={(e) =>
                setToyTmp({ ...toyTmp, category: e.target.value })
              }
            />
          </Label>

          <Label name="Высота (см)">
            <NumberInput
              id="size"
              value={toyTmp?.size || 0}
              onChange={(e) => setToyTmp({ ...toyTmp, size: +e.target.value })}
            />
          </Label>

          <Label name="Описание">
            <TextAreaInput
              id="description"
              value={toyTmp?.description || ""}
              onChange={(e) =>
                setToyTmp({ ...toyTmp, description: e.target.value })
              }
            />
          </Label>

          <Label name="Коробка">
            <NumberInput
              id="box"
              value={toyTmp?.box || 0}
              onChange={(e) => setToyTmp({ ...toyTmp, box: +e.target.value })}
            />
          </Label>
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

export default ToyEditForm;
