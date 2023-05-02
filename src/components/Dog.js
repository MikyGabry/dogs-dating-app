function Dog({dog}){
    return(
        <>
        <h2>Name: {dog.name}</h2>
        <h3>Age: {dog.age}</h3>
        <h3>Breed: {dog.breed}</h3>
        <h3>Favorite Toy: {dog.favoriteToy}</h3>
        <h3>Size: {dog.saze}</h3>
        <h3>Gender: {dog.gender}</h3>
        <hr />
        </>
    )
}

export default Dog;