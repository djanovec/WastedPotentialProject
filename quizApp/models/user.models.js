
const pool = require("../connections");

function login(req, res){
    pool.query("SELECT * FROM users", (err, result)=>{
        res.send({
            err: err,
            result: result
        })
    })
}

module.exports.login = login;

// async function createUser(req, res) {
//     try {
//         User.findOne({ email: req.body.email }, function (err, userExists) {
//             if (userExists) {
//                 return res.send({ ERROR: 'ACCOUNT ALREADY EXISTS' })
//             } else {
//                 let password = bcrypt.hashSync(req.body.password, 5);
//                 const userPost = new User({
//                     email: req.body.email,
//                     username: req.body.username,
//                     password: password,
//                     admin: req.body.isAdmin
//                 })
//                 var userPostRes = await userPost.save();
//                 console.log(userPostRes);
//                 return res.status(201).send('User created')
//             }
//         })
//     } catch (err) {
//         console.log("Error:" + ' ' + err);
//     }
// }
// async function login(req, res) {
//     try {
//         await User.findOne({ email: req.body.email }, 'password', function (err, userPass) {
//             if (bcrypt.compareSync(req.body.password, userPass)) {
//                 await User.findOne({ email: req.body.email }, function (err, user) {
//                     if (err) {
//                         console.log('Error:' + ' ' + err);
//                     } else {
//                         res.status(201).send(user)
//                     }
//                 })
//             } else if (err) {
//                 console.log('Error:' + ' ' + err);
//             }
//         })
//     } catch (err) {
//         console.log('Error:' + ' ' + err);
//     }
// }

// function deleteUser(req, res) {
//     User.deleteOne({ email: req.body.email }, function (err) {
//         if (err) {
//             return console.log('Error:' = ' ' + err)
//         } else {
//             res.status(201).send('User Deleted')
//         }
//     })
// }

// module.exports.deleteUser = deleteUser;
// module.exports.login = login;
// module.exports.createUser = createUser;