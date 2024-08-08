import { useState } from "react";
import { TranslateIcon } from "../../../../../common/icons/translate";
import { Select } from "../../../../atoms/select";

export function SelectTranslate() {
  const [language, setLanguage] = useState("english");
  
  return (
    <>
      <Select
        options={[
          {
            key: "english",
            value: "english",
            label: "English",
          },
          {
            key: "vietnamese",
            value: "vietnamese",
            label: "Tiếng Việt",
          },
          {
            key: "france",
            value: "france",
            label: "Français",
          },
        ]}
        value={language}
        onChange={(value) => {
          setLanguage(value);
        }}
        prefixIcon={<TranslateIcon />}
      />
    </>
  );
}
