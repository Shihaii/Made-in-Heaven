import type { Character } from "../types";
import axios from "axios";

export const getCharacters = async () => {
  let c: Character[] = [];
  var characters: Character[] | void = [];
  await axios
    .get(`http://localhost:3000/character/characters`)
    .then((response: { data: any }) => {
      characters = response.data;
      if (characters)
        for (let i = 0; i < characters.length; i++) {
          characters[i].id = response.data[i]._id;
        }
      console.log("response.data = ", response.data);
    });
  if (characters) {
    console.log("characters", characters);
    return characters;
  } else return c;
};
export const getCharacterById = async (characterId: string | string[]): Promise<Character | void> => {
  // var character : Character = {
  //   id:'',
  //   name:'',
  //   img: null,
  //   description:'',
  //   ability:'',
  //   host:'',
  //   show:false
  // }
  return await axios
    .get(`http://localhost:3000/character/${characterId}`)
    .then((response: { data: any }) => {
      let character = response.data;
      if (character) {
        character.id = response.data._id;
        console.log("character = ", character);
        character;
      } else "character not found";
    });
  // if(character){
  //   console.log("character", character)
  //    return character;
  //  }
  //  else return  c;
  //  return character
};
export const createCharacter = (character: Character) => {
  const formData = new FormData();
  formData.append("name", character.name);
  formData.append("img", character.img);
  formData.append("description", character.description);
  formData.append("ability", character.ability);
  formData.append("host", character.host);
  formData.append("show", JSON.stringify(character.show));
  console.log("CharacterController ", character);
  axios
    .post(`http://localhost:3000/character/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response: { data: any }) => {
      console.log(response.data);
    });
};

export const updateCharacter = (characterId: string, character: Character) => {
  const formData = new FormData();
  formData.append("name", character.name);
  formData.append("img", character.img);
  formData.append("description", character.description);
  formData.append("ability", character.ability);
  formData.append("host", character.host);
  formData.append("show", JSON.stringify(character.show));
  console.log("CharacterController Update ", character);
  axios
    .put(
      `http://localhost:3000/character/update?characterID=${characterId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((data) => {
      console.log(data);
    });
};

export const updateCharacterWithoutImg = (
  characterId: string,
  character: Character
) => {
  console.log("updateCharacterWithoutImg", character);
  const formData = new FormData();
  formData.append("name", character.name);
  formData.append("img", character.img);
  formData.append("description", character.description);
  formData.append("ability", character.ability);
  formData.append("host", character.host);
  formData.append("show", JSON.stringify(character.show));
  console.log("CharacterController Update without formdata ", formData);
  axios
    .put(
      `http://localhost:3000/character/updatewithoutimg?characterID=${characterId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((data) => {
      console.log(data);
    });
};

export const deleteCharacter = (characterId: string) => {
  axios
    .delete(`http://localhost:3000/character/delete?characterID=${characterId}`)
    .then((data) => {
      console.log(data);
    });
};
