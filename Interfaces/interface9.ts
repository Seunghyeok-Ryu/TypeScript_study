// function
type EatType = (food:string) => void;

interface IEat {
  (food:string): void;
}

// array
type PeronList = string[];

interface IPersonList {
  [index: number]: string;
}

// intersection
interface ErrorHandling {
  success: boolean;
  error?: {message:string};
}
interface ArtistsData {
  artists: {name: string}[];
}

type ArtistsResponseType = ArtistsData & ErrorHandling;

interface IArtistResponse extends ArtistsData, ErrorHandling {};

let art: ArtistsResponseType;
let iar: IArtistResponse;

// union types
interface Bird{
  fly(): void;
  layEggs():void;
}
interface Fish{
  swim(): void,
  layEggs(): void;
}

type PetType = Bird | Fish;
// interface IPet extends PetType {};   interface는 interface에 상속 불가
// class Pet implements PetType {};   union type은 class에 implemnets로 넣어줄 수 없음

// Declaration Merging - interface
// interface만 사용 가능 같은 MergingInterface 사용 합쳐져서 출력
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}
let mi: MergingInterface;

 