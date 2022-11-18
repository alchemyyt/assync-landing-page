const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCDbTW-dvIenlPiFdlifZLqQ&hl=en&gl=US';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4faa2b21f1msh660e7dedf862b00p172ff7jsnb77e8b3d7043',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const respons = await fetch(urlApi,options)
  const data = await respons.json();
  return data;
}
//Ahora vamos usar un nuevo concepto: una función que se invoca a sí misma; con JavaScript podemos tener funciones anónimas que permitan llamarse automáticamente, la estructura cuenta con la palabra reservada **async **y con funciones arrows:
(async () => {
  //Dentro implementamos la lógica necesaria para hacer el llamado a la API, obtener los elementos y mostrarlos en html
  //Se implementa try y catch
  try{
    const videos = await fetchData(API);
console.log(videos.contents);

    let view =`
    ${videos.contents.map(videoMap=>`
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${videoMap.video.thumbnails[0].url}" alt="${videoMap.video.title}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-md text-gray-700">
            <span aria-hidden="true" >${videoMap.video.title}</span>
          </h3>
        </div>
      </div>
    `).slice(0,1).join('')}
  `;
  console.log(view+'view');
  content.innerHTML = view;
  } catch (error){
    console.log(error);
  }
  })();
