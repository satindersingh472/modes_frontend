axios
  .request({
    url: "http://127.0.0.1:5000/api/painting",
    params: {
      artist: "satinder"
    },
  })
  .then((response) => {
    let box = document.getElementById("box");
    for (let i = 0; i < response['data'].length; i++) {
    box.innerHTML += `<div>
                <h2> ID: ${response['data'][i][0]}</h2>
                <h2> Name: ${response['data'][i][1]}</h2>
                <h2> Date created: ${response['data'][i][2]}
                <img src="${response['data'][i][3]}" alt ="image of ${response['data'][i][1]}"/> </h2>

</div`;
    }
  })
  .catch((error) => {
if(error){
    let box = document.getElementById('box');
    box.innerHTML = 'There is an error';
}
  });
