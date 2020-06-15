import React, { Fragment } from "react";
import GenericSectionsTable from "./GenericSectionsTable";

const EditGenericSections = () => {
  const onRemoveGenericSection = (index) => {
    console.log("index - " + index);
  };

  const list = [
    {
      title: "test",
      subtitle: "",
      body: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
      media: [
        {
          mediaType: "video",
          contentURL: "https://www.youtube.com/embed/TD2hNsY6G7E",
          description: "asdasdasdasdasdasdasdasdasdasd",
        },
        {
          mediaType: "sound",
          contentURL:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/198619623&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          description: "asdasdasdasdasdasdasdasdasdasd",
        },
        {
          mediaType: "image",
          contentURL:
            "https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w",
          description: "asdasdasdasdasdasdasdasdasdasd",
        },
      ],
    },
  ];

  return (
    <GenericSectionsTable
      genericSectionsList={list}
      onRemoveGenericSection={onRemoveGenericSection}
    ></GenericSectionsTable>
  );
};

export default EditGenericSections;
