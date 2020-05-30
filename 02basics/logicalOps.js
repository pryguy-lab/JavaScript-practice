let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
    
    console.log("hello user")
    console.log("Granted access to paid courses")
} else if (IsVerified || isGuest){
    console.log("Allowed free previews")
    
} else {
    console.log("MESSAGE:Please contact admin")
}