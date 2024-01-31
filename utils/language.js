import { LOCALE_DATA } from '@/constants/app'

export const getCurrentBrowserLanguage = () => {
  let language = navigator.language.toLowerCase()
  switch (language) {
  case 'en-us':
  case 'en':
    language = LOCALE_DATA.EN
    break
  case 'ja-jp':
  case 'ja':
  case 'jp':
    language = LOCALE_DATA.JA
    break
  case 'zh':
  case 'zh-cn':
  case 'zh-hk':
  case 'zh-mo':
  case 'zh-sg':
  case 'zh-tw':
    language = LOCALE_DATA.CN
    break
  case 'it':
  case 'it-ch':
  case 'it-it':
    language = LOCALE_DATA.EN
    break
  case 'id':
  case 'id-id':
    language = LOCALE_DATA.EN
    break
  case 'ru':
  case 'ru-ru':
    language = LOCALE_DATA.EN
    break
  case 'nl':
  case 'nl-be':
  case 'nl-nl':
    language = LOCALE_DATA.EN
    break
  case 'el':
  case 'el-gr':
    language = LOCALE_DATA.EN
    break
  case 'es':
  case 'es-ar':
  case 'es-bo':
  case 'es-cl':
  case 'es-co':
  case 'es-cr':
  case 'es-do':
  case 'es-ec':
  case 'es-es':
  case 'es-gt':
  case 'es-hn':
  case 'es-mx':
  case 'es-ni':
  case 'es-pa':
  case 'es-pe':
  case 'es-pr':
  case 'es-py':
  case 'es-sv':
  case 'es-uy':
  case 'es-ve':
    language = LOCALE_DATA.EN
    break
  case 'de':
  case 'de-at':
  case 'de-ch':
  case 'de-de':
  case 'de-li':
  case 'de-lu':
    language = LOCALE_DATA.EN
    break
  case 'pt':
  case 'pt-br':
  case 'pt-pt':
    language = LOCALE_DATA.EN
    break
  default:
    language = LOCALE_DATA.EN
  }
  return language
}
