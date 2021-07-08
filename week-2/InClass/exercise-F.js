function checksUser(userName, type) {

    const user = userName[0];
    const capital = user.toUpperCase();

    if (user === capital && userName.length >= 5 && userName.length <= 10) {

        return "Username valid";

    } else {

        if (type === "manager" || type === "admin") {

            return "Username valid";

        }

        return "Username invalid";

    }

}

const myFunction = checksUser("wendy","manager");

console.log(myFunction)

