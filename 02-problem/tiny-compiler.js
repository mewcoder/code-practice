const templete = `
<div>
  <h1 @click="add" class="ccc" :id="a" >{{title}}</h1>
  <p>helloworld</p>
</div>
`;

function tokenize(input) {
  let tokens = [];
  let type = "";
  let val = "";
  for (let i = 0; i < input.length; i++) {
    let ch = input[i];
    // console.log(val);
    if (ch === "<") {
      add(); // 语义更换时，把之前收集的 val push 到 token里
      if (input[i + 1] === "/") type = "tagend";
      else type = "tagstart";
    } else if (ch === ">") {
      add();
      type = "text";
      continue;
    } else if (/[\s]/.test(ch)) {
      add();
      type = "props";
      continue;
    }
    val += ch;
  }
  function add() {
    if (val) {
      if (type === "tagstart") val = val.slice(1); // <div => div
      if (type === "tagend") val = val.slice(2); //  </div  => div
      tokens.push({
        type,
        val,
      });
      val = "";
    }
  }
  return tokens;
}

function parse(templete) {
  const tokens = tokenize(templete);
  console.log(tokens);
  let i = 0;
  let ast = {
    type: "root",
    props: [],
    children: [],
  };
  while (i < tokens.length) {
    ast.children.push(walk());
  }

  return ast;

  function walk() {
    let token = tokens[i];
    if (token.type === "tagstart") {
      let node = {
        type: "element",
        tag: token.val,
        props: [],
        children: [],
      };
      token = tokens[++i];
      while (token.type !== "tagend") {
        if (token.type === "props") {
          node.props.push(walk());
        } else {
          node.children.push(walk());
        }
        token = tokens[i];
      }
      i++;
      return node;
    }
    if (token.type === "tagend") {
      i++;
    }
    if (token.type === "text") {
      i++;
      return token;
    }
    if (token.type === "props") {
      const [key, val] = token.val.split("=");
      i++;
      return { key, val };
    }
  }
}

function compile(templete) {
  const ast = parse(templete);
  console.log(ast);
  // transform(ast);
  // return generate(ast);
}

compile(templete);

// https://github.com/shengxinjing/weiyouyi
