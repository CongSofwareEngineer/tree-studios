import moment from 'moment/moment';
import { toast } from 'react-toastify';

import BigNumber from 'bignumber.js';

// const _ = require('lodash');

// const REGEX_ARRAY = /^[a-zA-Z]+(,[a-zA-Z]+)*$/;
// const REGEX_DESCRIPTION = /^[a-zA-Z ]+$/;
// const REGEX_HTTP = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
// const REGEX_BOOLEAN = /^(true|false)$/i;
// const REGEX_NUMBER = /^\d+$/;

export const numberWithCommas = (x) => {
  if (!x) {
    return 0
  }
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};
export const roundingNumber = (number, rounding = 4) => {
  return Number(Number(number).toFixed(rounding));
};

export const convertSecondToDay = (seconds) => {
  return Math.floor(seconds / (3600 * 24));
};

export const convertDayToSecond = (day) => {
  return Math.floor(day * (3600 * 24));
};

export const exchangeUnixTimeToDateTime = (time) => {
  time = moment.unix(time).toISOString();
  const now = moment();
  const hours = moment(now).diff(time, 'hours');
  const minutes = moment(now).diff(time, 'minutes');
  const seconds = moment(now).diff(time, 'seconds');
  if (minutes < 1) {
    return `${seconds} seconds ago`;
  } else if (hours < 1) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else {
    return moment(time).format('YYYY/MM/DD');
  }
}

export const formatDataTime = (date, format = 'DD-MM-YYYY', isUnix = false) => {
  if (isUnix) {
    return moment.unix(date).format(format)
  }
  return moment(date).format(format)
}

export const exchangeTimeStampToDateTime = (time) => {
  const now = moment();
  const hours = moment(now).diff(time, 'hours');
  const minutes = moment(now).diff(time, 'minutes');
  const seconds = moment(now).diff(time, 'seconds');
  if (minutes < 1) {
    return `${seconds} seconds ago`;
  } else if (hours < 1) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else {
    return moment(time).format('YYYY/MM/DD');
  }
};

export const viewExternal = (url) => {
  window.open(url, '_blank');
};

export const showNotificationError = (errorMessage = '', autoClose = 5000) => {
  toast.error(errorMessage, {
    position: 'bottom-right',
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

export const showNotificationSuccess = (message = '', autoClose = 5000) => {
  toast.success(message, {
    position: 'bottom-right',
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

export const saveDataLocal = (key, data) => {
  try {
    // eslint-disable-next-line no-undef
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getDataLocal = (key) => {
  try {
    // eslint-disable-next-line no-undef
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeDataLocal = (key) => {
  try {
    // eslint-disable-next-line no-undef
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
export function escapeRegExp (string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
export const replaceAll = (str, find, replace) => {
  return typeof str === 'string'
    ? str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
    : '';
};

export const lowerCase = (value) => {
  return typeof value === 'string' ? value.toLowerCase() : value;
};

export const upperCase = (value) => {
  return value ? value.toUpperCase() : value;
};

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};
export const isNumeric = (str) => {
  return /^\d+$/.test(str);
}

export const cloneData = (data) => {
  if (!data) {
    return data
  }
  return JSON.parse(JSON.stringify(data))
}

export const getMetaBase = (parent) => {
  return {
    title: parent?.title?.absolute,
    description: parent?.description,
    image: parent?.twitter?.images ? parent?.twitter?.images[0].url : ''
  }
}

export function on (obj, ...args) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args)
  }
}

export function off (obj, ...args) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args)
  }
}

export const copyToClipboard = (text, title) => {
  const tmp = document.createElement('input')
  tmp.value = text
  document.body.appendChild(tmp)
  tmp.select()
  document.execCommand('copy')
  tmp.remove()
  // message.success({
  //   content: <div className='flex gap-1'>
  //     {title ?? 'Copied!'}
  //     <img style={{ top: 4, width: 16, height: 16, position: 'relative' }} src={images.icon.iconSuccess} />
  //   </div>,
  //   icon: <></>
  // })
}

export const isObject = (data, checkEmpty = false) => {
  const isObj = data && typeof data === 'object'
  return checkEmpty
    ? isObj && Object.keys(data).length > 0
    : isObj
}

export const isEmptyObject = (data) => {
  const isObj = data && typeof data === 'object'
  return isObj && Object.keys(data).length < 1
}
export const isLink = (str) => {
  // Sử dụng biểu thức chính quy để kiểm tra
  const pattern = /^(http|https|ftp):\/\/[^\s/$.?#].[^\s]*$/
  return pattern.test(str)
}

export const formatPrice = (data) => {
  return numberWithCommas(data)
}
export const formatPriceBase = (data, discount = 20) => {
  const rate = new BigNumber(100).plus(discount).dividedBy(100).toNumber()
  return numberWithCommas(new BigNumber(rate).multipliedBy(data).toNumber())
}
export const ellipsisAddress = (
  address,
  prefixLength = 13,
  suffixLength = 4,
  note = '...'
) => {
  return `${address.substr(0, prefixLength)}${note}${address.substr(
    address.length - suffixLength,
    suffixLength
  )}`
}
export const getBase64 = async (file) => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
}

export const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data)
  const byteArrays = []
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)
    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }
    byteArrays.push(new Uint8Array(byteNumbers))
  }
  const blob = new Blob(byteArrays, { type: contentType })
  return blob
}

export const detectImageUrl = (url) => {
  if (!url || url === '') return ''
  if (url?.startsWith('http')) {
    return url
  } else {
    const urlFormat = `${process.env.NEXT_PUBLIC_IPFS}/${url}`.trim()?.toString()
    return urlFormat
  }
}

export const scrollTop = () => {
  if (window) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export const deleteItemArr = (myArray, indexToDelete) => {
  const arrClone = cloneData(myArray)
  return arrClone.splice(indexToDelete, 1);
}

export const detectImg = (url, isIPFS = false, isOptimize = true) => {
  if (!url || url === '') return ''
  if (url?.startsWith('http')) {
    return url
  }

  let urlFormat = `${process.env.NEXT_PUBLIC_IPFS}/${url}`.trim()?.toString()
  if (isIPFS) {
    urlFormat = `${process.env.NEXT_PUBLIC_UPLOAD_CARE_URL}/${url}`.trim()?.toString()
    if (isOptimize) {
      urlFormat += '/-/preview/500x500/-/quality/smart/-/format/auto/'
    }
  }
  return urlFormat
}
