var browser = "Not known";
      if (navigator.userAgent.indexOf("Firefox") != -1) browser = 
        "Firefox";
      if (navigator.userAgent.indexOf("Chrome") != -1) browser = 
        "Chrome";
      if (navigator.userAgent.indexOf("Edge") != -1) browser = 
        "Edge";
      if (navigator.userAgent.indexOf("Opera") != -1) browser = 
        "Opera";
      if (navigator.userAgent.indexOf("Safari") != -1) browser = 
        "Safari";
console.info(browser);