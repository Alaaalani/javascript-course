/*
 Template Literals [Template Strings]
 */

 const thekind = "Male"

 let oldways = "Hello Its ME " +(thekind ==='Male' ? 'Mr' : 'Mrs') + "Osama \n" + 
 "Iam " + thekind + "\n" +
 "Iam From Elzero Web School \n " +
 "I Love All My Follerers";

 let newWay = `Hello Its Me Osama" Iam ${thekind}
 Iam From Elzero Web School
 I Love All My Followers` ;

 console.log(oldways);
 console.log(newWay)