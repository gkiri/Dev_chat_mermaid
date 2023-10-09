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
import brain_es from "../../../public/locales/es/brain.json";
import chat_es from "../../../public/locales/es/chat.json";
import config_es from "../../../public/locales/es/config.json";
import delete_brain_es from "../../../public/locales/es/deleteBrain.json";
import explore_es from "../../../public/locales/es/explore.json";
import invitation_es from "../../../public/locales/es/invitation.json";
import login_es from "../../../public/locales/es/login.json";
import logout_es from "../../../public/locales/es/logout.json";
import signUp_es from "../../../public/locales/es/signUp.json";
import translation_es from "../../../public/locales/es/translation.json";
import updatePassword_es from "../../../public/locales/es/updatePassword.json";
import upload_es from "../../../public/locales/es/upload.json";
import user_es from "../../../public/locales/es/user.json";
// import all namespaces French
import brain_fr from "../../../public/locales/fr/brain.json";
import chat_fr from "../../../public/locales/fr/chat.json";
import config_fr from "../../../public/locales/fr/config.json";
import delete_brain_fr from "../../../public/locales/fr/deleteBrain.json";
import explore_fr from "../../../public/locales/fr/explore.json";
import invitation_fr from "../../../public/locales/fr/invitation.json";
import login_fr from "../../../public/locales/fr/login.json";
import logout_fr from "../../../public/locales/fr/logout.json";
import signUp_fr from "../../../public/locales/fr/signUp.json";
import translation_fr from "../../../public/locales/fr/translation.json";
import updatePassword_fr from "../../../public/locales/fr/updatePassword.json";
import upload_fr from "../../../public/locales/fr/upload.json";
import user_fr from "../../../public/locales/fr/user.json";
// import all namespaces Portuguese
import brain_ptbr from "../../../public/locales/pt-br/brain.json";
import chat_ptbr from "../../../public/locales/pt-br/chat.json";
import config_ptbr from "../../../public/locales/pt-br/config.json";
import delete_brain_ptbr from "../../../public/locales/pt-br/deleteBrain.json";
import explore_ptbr from "../../../public/locales/pt-br/explore.json";
import invitation_ptbr from "../../../public/locales/pt-br/invitation.json";
import login_ptbr from "../../../public/locales/pt-br/login.json";
import logout_ptbr from "../../../public/locales/pt-br/logout.json";
import signUp_ptbr from "../../../public/locales/pt-br/signUp.json";
import translation_ptbr from "../../../public/locales/pt-br/translation.json";
import updatePassword_ptbr from "../../../public/locales/pt-br/updatePassword.json";
import upload_ptbr from "../../../public/locales/pt-br/upload.json";
import user_ptbr from "../../../public/locales/pt-br/user.json";
// import all namespaces Russian
import brain_ru from "../../../public/locales/ru/brain.json";
import chat_ru from "../../../public/locales/ru/chat.json";
import config_ru from "../../../public/locales/ru/config.json";
import delete_brain_ru from "../../../public/locales/ru/deleteBrain.json";
import explore_ru from "../../../public/locales/ru/explore.json";
import invitation_ru from "../../../public/locales/ru/invitation.json";
import login_ru from "../../../public/locales/ru/login.json";
import logout_ru from "../../../public/locales/ru/logout.json";
import signUp_ru from "../../../public/locales/ru/signUp.json";
import translation_ru from "../../../public/locales/ru/translation.json";
import updatePassword_ru from "../../../public/locales/ru/updatePassword.json";
import upload_ru from "../../../public/locales/ru/upload.json";
import user_ru from "../../../public/locales/ru/user.json";
// import all namespaces Simplified Chinese
import brain_zh_cn from "../../../public/locales/zh-cn/brain.json";
import chat_zh_cn from "../../../public/locales/zh-cn/chat.json";
import config_zh_cn from "../../../public/locales/zh-cn/config.json";
import delete_brain_zh_cn from "../../../public/locales/zh-cn/deleteBrain.json";
import explore_zh_cn from "../../../public/locales/zh-cn/explore.json";
import invitation_zh_cn from "../../../public/locales/zh-cn/invitation.json";
import login_zh_cn from "../../../public/locales/zh-cn/login.json";
import logout_zh_cn from "../../../public/locales/zh-cn/logout.json";
import signUp_zh_cn from "../../../public/locales/zh-cn/signUp.json";
import translation_zh_cn from "../../../public/locales/zh-cn/translation.json";
import updatePassword_zh_cn from "../../../public/locales/zh-cn/updatePassword.json";
import upload_zh_cn from "../../../public/locales/zh-cn/upload.json";
import user_zh_cn from "../../../public/locales/zh-cn/user.json";

type BrainTranslations = typeof import("../../../public/locales/en/brain.json");
//type all translations
export type Translations = {
  brain: BrainTranslations;
  chat: typeof import("../../../public/locales/en/chat.json");
  config: typeof import("../../../public/locales/en/config.json");
  delete_brain: typeof import("../../../public/locales/en/deleteBrain.json");
  explore: typeof import("../../../public/locales/en/explore.json");
  mockexams: typeof import("../../../public/locales/en/mockexams.json");
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
  es = "es",
  fr = "fr",
  ptbr = "ptbr",
  ru = "ru",
  zh_cn = "zh_cn",
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
  es: {
    brain: brain_es,
    chat: chat_es,
    config: config_es,
    explore: explore_es,
    invitation: invitation_es,
    login: login_es,
    logout: logout_es,
    signUp: signUp_es,
    translation: translation_es,
    updatePassword: updatePassword_es,
    upload: upload_es,
    user: user_es,
    delete_brain: delete_brain_es,
  },
  fr: {
    brain: brain_fr,
    chat: chat_fr,
    config: config_fr,
    explore: explore_fr,
    invitation: invitation_fr,
    login: login_fr,
    logout: logout_fr,
    signUp: signUp_fr,
    translation: translation_fr,
    updatePassword: updatePassword_fr,
    upload: upload_fr,
    user: user_fr,
    delete_brain: delete_brain_fr,
  },
  ptbr: {
    brain: brain_ptbr,
    chat: chat_ptbr,
    config: config_ptbr,
    explore: explore_ptbr,
    invitation: invitation_ptbr,
    login: login_ptbr,
    logout: logout_ptbr,
    signUp: signUp_ptbr,
    translation: translation_ptbr,
    updatePassword: updatePassword_ptbr,
    upload: upload_ptbr,
    user: user_ptbr,
    delete_brain: delete_brain_ptbr,
  },
  ru: {
    brain: brain_ru,
    chat: chat_ru,
    config: config_ru,
    explore: explore_ru,
    invitation: invitation_ru,
    login: login_ru,
    logout: logout_ru,
    signUp: signUp_ru,
    translation: translation_ru,
    updatePassword: updatePassword_ru,
    upload: upload_ru,
    user: user_ru,
    delete_brain: delete_brain_ru,
  },
  zh_cn: {
    brain: brain_zh_cn,
    chat: chat_zh_cn,
    config: config_zh_cn,
    explore: explore_zh_cn,
    invitation: invitation_zh_cn,
    login: login_zh_cn,
    logout: logout_zh_cn,
    signUp: signUp_zh_cn,
    translation: translation_zh_cn,
    updatePassword: updatePassword_zh_cn,
    upload: upload_zh_cn,
    user: user_zh_cn,
    delete_brain: delete_brain_zh_cn,
  },
} as const;
