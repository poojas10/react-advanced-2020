import React, { useState} from 'react'


export const UserCard = () => {
  let array = [
    {
      name: 'poo',
      value:4
    }, {
      name: 'john',
      value:5
    }
  ]
  return (
    <>
      {array.map((user, id) => {
        const { name,value } = user;
        return (
          <div className="item">
                <p>{name}</p>
          </div>
        );
      })}
    </>
  );
}
