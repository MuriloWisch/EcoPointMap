const examples = [
  {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117030.87553491205!2d-46.71223878620581!3d-23.560725528885246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f66c5f1fbcd%3A0x17e242a07374f0be!2sReciclagem%20e%20Carreto!5e0!3m2!1spt-BR!2sbr!4v1746275658811!5m2!1spt-BR!2sbr",
		name: "Reciclagem e Carreto",
    type: "Baterias, Garrafas plásticas",
    address: "R. Cel. Carlos Oliva, 173 - Tatuapé, São Paulo - SP, 03067-010",
    openingHours: "08:00 - 18:00 (segunda a sábado)",
    phone: "(11) 99999-9999",
  },
  {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116951.60737869832!2d-46.86395660273435!3d-23.649561799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce510058392a0%3A0xbfeee7df51294c4d!2sReciclagem%20R%26F!5e0!3m2!1spt-BR!2sbr!4v1746284123194!5m2!1spt-BR!2sbr",
		name: "Reciclagem R&F",
    type: "Baterias, Garrafas plásticas",
    address: "R. Ada Negri, 193 - Santo Amaro, São Paulo - SP, 04755-000",
    openingHours: "07:00 - 18:00 (segunda a sexta) e 07:00 - 12:00 (sábado)",
    phone: "(11) 99999-9999",
  },
  {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117058.29800058204!2d-46.73545890273439!3d-23.52991939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ed7fe03de99%3A0x8005062f7226af09!2sEcoponto%20Tatuap%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1746284372449!5m2!1spt-BR!2sbr",
		name: "Ecoponto Tatuapé",
    type:
      "Baterias, Cartuchos de tinta, Eletrônicos, Espuma de plástico, Garrafas de vidro, Garrafas plásticas, Lâmpadas",
		address: "Av. Salim Farah Maluf, 179 - Tatuapé, São Paulo - SP, 03304-090",
    openingHours: "06:00 - 22:00 (segunda a sábado) e 06:00 - 18:00 (domingo)",
    phone: "(11) 99999-9999",
  },
]

document.addEventListener("DOMContentLoaded", () => {
	const pointsList = JSON.parse(localStorage.getItem('pointsList') || '[]')
	if (pointsList.length === 0) {
		pointsList.push(...examples)
		localStorage.setItem('pointsList', JSON.stringify(pointsList))
	}

  const getPoints = localStorage.getItem("pointsList")

  let points = [];
  try {
    points = JSON.parse(getPoints)
  } catch (error) {
    alert("Ocorreu um erro ao carregar os pontos de reciclagem")
    return;
  }

  const homeList = document.querySelector(".servicos-home-lista")
  if (!homeList) {
    alert("Ocorreu um erro ao carregar os pontos de reciclagem")
    return
  }

  points.forEach((point) => {
    const li = document.createElement("li")

		if (point.iframeSrc) {
			const iframe = document.createElement("iframe")
			iframe.src = point.iframeSrc
			iframe.width = "450"
			iframe.height = "450"
			iframe.style.border = "0"
			iframe.style.width = "100%"
			iframe.loading = "lazy"
			iframe.referrerPolicy = "no-referrer-when-downgrade"
			li.appendChild(iframe)
		} else {
			const wrapper = document.createElement("div")
			wrapper.style.display = "flex"
			wrapper.style.justifyContent = "center"
			wrapper.style.alignItems = "center"
			wrapper.style.width = "100%"

			const img = document.createElement("img")
			img.src = "./img/ecoPoint.png"
			img.width = 400
			img.height = 400

			wrapper.appendChild(img)
			li.appendChild(wrapper)
		}

    const container = document.createElement("div")

    const h2 = document.createElement("h2")
    h2.textContent = point.name;
    container.appendChild(h2)

    const pointType = document.createElement("p")
    pointType.textContent = `Tipo de material: ${point.type}`
    container.appendChild(pointType)

    const pointAddress = document.createElement("p")
    pointAddress.textContent = `Endereço: ${point.address}`
    container.appendChild(pointAddress)

    const pointOpeningHours = document.createElement("p")
    pointOpeningHours.textContent = `Horário de funcionamento: ${point.openingHours}`
    container.appendChild(pointOpeningHours)

    const pointPhone = document.createElement("p")
    pointPhone.textContent = `Contato: ${point.phone}`
    container.appendChild(pointPhone)

    const favoriteButton = document.createElement("div")
    favoriteButton.classList.add("botao-favoritar")
    const button = document.createElement("button")
    button.textContent = "Favoritar"
    favoriteButton.appendChild(button)
    container.appendChild(favoriteButton)

		button.addEventListener("click", () => {

			const existingFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")

			const alreadyFavorite = existingFavorites.some((fav) => fav.name === point.name)
			if (!alreadyFavorite) {

				existingFavorites.push(point)
				localStorage.setItem("favorites", JSON.stringify(existingFavorites))
				button.textContent = "Favoritado"
				button.disabled = true
			} else {
				alert("Este ponto de reciclagem já está nos seus favoritos!")
			}
		})

    li.appendChild(container)
    homeList.appendChild(li)
  })
})
