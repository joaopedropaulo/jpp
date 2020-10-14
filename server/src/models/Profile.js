const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    currentCompany: {
      type: String,
    },
    location: {
      type: String,
    },
    currentJobTitle: {
      type: String,
    },
    email: {
      type: String,
    },
    profilePicURL: {
      type: String,
    },
    profileBackgroundImageURL: {
      type: String,
    },
    profileMobileBackgroundImageURL: {
      type: String,
    },
    professionalInterests: [
      {
        type: String,
      },
    ],
    personalInterests: [
      {
        type: String,
      },
    ],
    skills: [
      {
        name: {
          type: String,
          required: true,
        },
        experienceLevel: {
          type: Number,
          required: true,
        },
      },
    ],
    languages: [
      {
        name: {
          type: String,
          required: true,
        },
        level: {
          type: Number,
          required: true,
        },
      },
    ],
    bio: {
      type: String,
    },
    experience: [
      {
        jobTitle: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        companyIcon: {
          type: String,
        },
        location: {
          type: String,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
      },
    ],
    education: [
      {
        school: {
          type: String,
          required: true,
        },
        degree: {
          type: String,
          required: true,
        },
        fieldOfStudy: {
          type: String,
          required: true,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
      },
    ],
    social: {
      youtube: {
        type: String,
      },
      twitter: {
        type: String,
      },
      facebook: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      instagram: {
        type: String,
      },
      github: {
        type: String,
      },
    },
    genericSections: [
      {
        title: {
          type: String,
          required: true,
        },
        subtitle: {
          type: String,
        },
        body: {
          type: String,
          required: true,
        },
        media: [
          {
            mediaType: {
              type: String,
            },
            contentURL: {
              type: String,
            },
            description: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model("profile", ProfileSchema);
