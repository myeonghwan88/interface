// type alias
type EatType = (food: string) => void;

// interface
interface IEat {
  (food: string): void;
}

//array
// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index: number]: string;
}

//intersection
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;

//union types
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

//interface IPet extends PetType {} 

//class Pet implements PetType {}



//Declaration Merging - interface
interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}

let mi: MergingInterface;
//mi.a or b

//Declaration Merging - type alias
/* type MergingType = {
  a: string;
};

type MergingType = {
  b: string;
};*/