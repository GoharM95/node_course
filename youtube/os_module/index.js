// os(operating system) - is a built-in module
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// {
//     uid: 501,
//     gid: 20,
//     username: 'gohar',
//     homedir: '/Users/gohar',
//     shell: '/bin/zsh'
//   }

//  uptime() - this method returns an integer value that specifies the number of seconds the system is running i.e. system uptime.
console.log(`the system uptime is ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
