/* eslint-disable max-lines */
// import all namespaces English
import brain_en from "../../../public/locales/en/brain.json";
import chat_en from "../../../public/locales/en/chat.json";
import config_en from "../../../public/locales/en/config.json";
import delete_brain_en from "../../../public/locales/en/deleteBrain.json";
import explore_en from "../../../public/locales/en/explore.json";
import invitation_en from "../../../public/locales/en/invitation.json";
import login_en from "../../../public/locales/en/login.json";
import logout_en from "../../../public/locales/en/logout.json";
import mockexams_en from "../../../public/locales/en/mockexams.json";
import signUp_en from "../../../public/locales/en/signUp.json";
import translation_en from "../../../public/locales/en/translation.json";
import updatePassword_en from "../../../public/locales/en/updatePassword.json";
import upload_en from "../../../public/locales/en/upload.json";
import user_en from "../../../public/locales/en/user.json";
// import all namespaces Spanish
// import all namespaces French
// import all namespaces Portuguese
// import all namespaces Russian
// import all namespaces Simplified Chinese

type BrainTranslations = typeof import("../../../public/locales/en/brain.json");
//type all translations
export type Translations = {
  brain: BrainTranslations;
  chat: typeof import("../../../public/locales/en/chat.json");
  config: typeof import("../../../public/locales/en/config.json");
  delete_brain: typeof import("../../../public/locales/en/deleteBrain.json");
  explore: typeof import("../../../public/locales/en/explore.json");
  mockexams?: typeof import("../../../public/locales/en/mockexams.json");
  invitation: typeof import("../../../public/locales/en/invitation.json");
  login: typeof import("../../../public/locales/en/login.json");
  logout: typeof import("../../../public/locales/en/logout.json");
  signUp: typeof import("../../../public/locales/en/signUp.json");
  translation: typeof import("../../../public/locales/en/translation.json");
  updatePassword: typeof import("../../../public/locales/en/updatePassword.json");
  upload: typeof import("../../../public/locales/en/upload.json");
  user: typeof import("../../../public/locales/en/user.json");
};

enum SupportedLanguages {
  en = "en",
  // es = "es",
  // fr = "fr",
  // ptbr = "ptbr",
  // ru = "ru",
  // zh_cn = "zh_cn",
}

export const defaultNS = "translation";
export const resources: Record<SupportedLanguages, Translations> = {
  en: {
    brain: brain_en,
    chat: chat_en,
    config: config_en,
    explore: explore_en,
    mockexams: mockexams_en,
    invitation: invitation_en,
    login: login_en,
    logout: logout_en,
    signUp: signUp_en,
    translation: translation_en,
    updatePassword: updatePassword_en,
    upload: upload_en,
    user: user_en,
    delete_brain: delete_brain_en,
  },
  
} as const;
