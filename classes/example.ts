class ClassName {
  private static instance : ClassName | null = null;
  public static getInstance (): ClassName {
    // ClassName 으로부터 만든 object가 있으면 그걸 return
    // 없으면 만들어서 return
    if(ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }
    return ClassName.instance
  }

  private constructor() {

  }
}

const a = ClassName.getInstance();
const b = ClassName.getInstance();

console.log(a === b);