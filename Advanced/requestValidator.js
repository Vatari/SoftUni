function solve(obj) {
  let errorMessage = "Invalid request header: Invalid";
  let props = ["GET", "POST", "DELETE", "CONNECT"];
  let httpParams = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

  let patternUri = /^(\*|[A-Za-z\d\.]+)$/g;
  let patternMsg = /^[^<>\\&'"]*$/g;

  if (!props.includes(obj.method) || !obj.hasOwnProperty("method")) {
    throw new Error(`${errorMessage} Method`);
  }

  if (!patternUri.test(obj.uri) || !obj.hasOwnProperty("uri")) {
    throw new Error(`${errorMessage} URI`);
  }

  if (!httpParams.includes(obj.version) || !obj.hasOwnProperty("version")) {
    throw new Error(`${errorMessage} Version`);
  }

  if (!patternMsg.test(obj.message) || !obj.hasOwnProperty("message")) {
    throw new Error(`${errorMessage} Message`);
  }

  return obj;
}

console.log(
  solve({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
);

console.log(
  solve({
    method: "OPTIONS",
    uri: "git.master",
    version: "HTTP/1.1",
    message: "-recursive",
  })
);

console.log(
  solve({
    method: "POST",
    uri: "home.bash",
    message: "rm -rf /*",
  })
);
