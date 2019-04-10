//dynamic codegen
var PROTO_FILE_PATH = '/home/liu/IdeaProjects/fron_end/grpc_demo/proto/Student.proto';
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.netty.proto;

var server = new grpc.Server();

server.addService(grpcService.StudentService.service, {
    getRealnameByUsername: getRealnameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentsWrapperByAges: getStudentsWrapperByAges,
    biTalk: biTalk
});

server.bind('localhost:8899', grpc.ServerCredentials.createInsecure());
server.start();

function getRealnameByUsername(call, callback) {
    console.log("call: " + call.request.username);
    callback(null, {realname: '张珊'})
}
function getStudentsByAge(call, callback) {
}
function getStudentsWrapperByAges(call, callback) {
}
function biTalk(call, callback) {
}
