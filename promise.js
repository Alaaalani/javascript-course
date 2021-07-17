/*
  promise intro 
  promise Is one of the best Feature In ES6
  Promise Make It Easy To Support Asynchronous Programming 
  Promise In JavaScript Is Like Promise in Real Life
  Promise Is Something That Will Happen in The Future 
  Promise Is A Placeholder For A Future Value 
  You Booked A Cinema Ticket , You Have A Promise From Cinema Owner 2 Have A seat 
  You Got Task To Do U Promised Your Boss To Do The Task
  You Ordered Food From Restaurant
      [Promise] Is the Order Record
      [The Future Value ] IS The iPhone You will Receive
    Promise Is An Object 
    Promise Is The Event Completion Or Failure of Async operation & Its Resulting Value ,
    JavaScript Use callbacks For Asynchronous Programming 
       [1] Function Called And Do The Task 
       [2] Action complete
       [3] Another Function called
       [4] Action Complete 
       [5] Another Function Called
    In Complex Cases => Every call Add Nesting level
    http://callbackhe11.com/
    promise Avoiding Callback Hell or pyramid Of Doom 
    Promise Is One Of This States
 [1] Pending => Not  Fulfilled Or Rejected
 [2] Fulfilled => Operation Succeeded 
 [3] Rejected => Operation Failed
*/

const myPromise  = new promise ((resolve, reject) => {
    // console.log ("welcome To My First Promise");
    /*
     Asynchronous Operation 
     Filfulled => resolve
     Rejective => reject
     */

     let connect = true;
     if (connect) {
         resolve ("connection Established");
     } else{
         reject (Error("connection Failed"));
     }
});

// console.log(typeof myPromise);

//myPromise.then(
   // (resolved) => console.log(resolved),
  //  (rejected) => console.log(rejected)
// );


const theResolved = resolved => console.log(resolved);
const therejected = rejected => console.log(rejected);
myPromise.then(theResolved,therejected);

