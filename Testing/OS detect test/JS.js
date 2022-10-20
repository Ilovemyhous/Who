var OS = "Not known";
      if (navigator.appVersion.indexOf("Win") != -1) OS = 
        "Windows";
      if (navigator.appVersion.indexOf("Mac") != -1) OS = 
        "MacOS";
      if (navigator.appVersion.indexOf("X11") != -1) OS = 
        "UNIX OS";
      if (navigator.appVersion.indexOf("Linux") != -1) OS = 
        "Linux";

console.log(OS);