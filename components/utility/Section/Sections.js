import { useEffect, useState } from "react";
import Section from "./Section";
import Loader from "../Loader/Loader";

const Sections = () => {
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    if (!sectionData) {
      (async () => {
        const res = await fetch(
          "https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/entries?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0&content_type=section"
        );
        const data = await res.json();
        setSectionData(data);
      })();
    }
  }, [sectionData]);

  if (!sectionData) {
    return <Loader />;
  }

  return sectionData.items.map((section, index) => (
    <Section
      {...section.fields}
      key={section.sys.id}
      imageUrl={sectionData.includes.Asset[index].fields.file.url}
    />
  ));
};

export default Sections;
