document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault()
  addPoint()
})

document.getElementById('name').addEventListener('input', (event) => {
  const input = event.target
  isValidInput(input)
})

document.getElementById('address').addEventListener('input', (event) => {
  const input = event.target
  isValidInput(input)
})

document.getElementById('type').addEventListener('input', (event) => {
  const input = event.target
  isValidType(input)
})

document.getElementById('mapEmbed').addEventListener('input', function (event) {
  const input = event.target
  extractMapSrcFromIframe(input)
  fillMapPreview(input)
})

document.getElementById('openingHours').addEventListener('input', (event) => {
  const input = event.target
  isValidOpeningHours(input)
})

document.getElementById('phone').addEventListener('input', (event) => {
  const input = event.target
  const numbers = input.value.replace(/\D/g, '').substring(0, 11)

  input.dataset.rawValue = numbers
  input.value = formatPhoneMask(numbers)
  isValidPhone(input)
})

document.getElementById('imageUrl').addEventListener('input', (event) => {
  const input = event.target
  isValidImageUrl(input)
})

function extractMapSrcFromIframe(input) {
  const value = input.value.trim()
  const srcMatch = value.match(/src=["']([^"']+)["']/i)

  if (srcMatch) {
    const srcValue = srcMatch[1]
    input.value = srcValue
    isValidMapUrl(input, srcValue)
  } else {
    isValidMapUrl(input, value)
  }
}

function fillMapPreview(input) {
  const preview = document.getElementById('mapPreview')
  if (!input.value || !isValidMapUrl(input, input.value)) {
    preview.innerHTML = ''
    return;
  }

  preview.innerHTML = `
    <iframe 
      src="${input.value}" 
      width="100%" 
      height="200" 
      style="border:0 margin-top:10px" 
      allowfullscreen 
      loading="lazy">
    </iframe>`
}

function formatPhoneMask(numbers) {
  const limitedNumbers = numbers.slice(0, 11)

  let formatted = ''
  if (limitedNumbers.length > 0) {
    formatted = `(${limitedNumbers.substring(0, 2)}`
  }
  if (limitedNumbers.length > 2) {
    formatted += `) ${limitedNumbers.substring(2, 7)}`
  }
  if (limitedNumbers.length > 7) {
    formatted += `-${limitedNumbers.substring(7, 11)}`
  }

  return formatted
}

function addPoint() {
  const form = document.getElementById('form')
  const { name, address, type, mapEmbed, openingHours, phone, imageUrl } = form
  const validations = [
    isValidInput(name),
    isValidInput(address),
    isValidType(type),
    isValidMapUrl(mapEmbed, mapEmbed.value),
    isValidOpeningHours(openingHours),
    isValidPhone(phone),
    isValidImageUrl(imageUrl),
  ]
  const isValidForm = validations.every(Boolean)
  if (!isValidForm) return

  const pointsList = JSON.parse(localStorage.getItem('pointsList') || '[]')

  pointsList.push({
    name: name.value,
    address: address.value,
    type: formatType(type.value),
    iframeSrc: mapEmbed.value,
    openingHours: openingHours.value,
    phone: getPhoneRawValue(phone),
    imageUrl: imageUrl.value,
  })

  localStorage.setItem("pointsList", JSON.stringify(pointsList))

  alert("Ponto de reciclagem cadastrado com sucesso!")
  form.reset()
  window.location.href = "../home/index.html"
}

function isValidInput(input) {
  const value = input.value.trim()
  const minLength = parseInt(input.getAttribute("minlength")) || 0

  if (value.length < minLength) {
    input.setCustomValidity(`Por favor, insira pelo menos ${minLength} caracteres.`)
    input.focus()
    return false
  }

  input.setCustomValidity("")
  return true
}

function isValidType(input) {
  const value = input.value.trim()

  if (value.length === 0) {
    input.setCustomValidity("Por favor, selecione um tipo de ponto de reciclagem.")
    input.focus()
    return false
  }

  input.setCustomValidity("")
  return true
}

function isValidMapUrl(input, url) {
  if (!url) {
    input.setCustomValidity('')
    return true
  }

  try {
    const urlObj = new URL(url)
    const isValid = urlObj.hostname.includes('google.com') &&
      urlObj.pathname.includes('/maps/embed')

    if (!isValid) {
      input.setCustomValidity('Insira um link válido do Google Maps Embed')
      return false
    }

    input.setCustomValidity('')
    return true
  } catch {
    input.setCustomValidity('URL inválido. Use um link do Google Maps Embed')
    return false
  }
}

function isValidOpeningHours(input) {
  if (input.value == '') return true
  return isValidInput(input)
}

function isValidPhone(input) {
  const phone = getPhoneRawValue(input)
  if (phone.length === 0 || phone.length === 11) {
    input.setCustomValidity("")
    return true
  }

  input.setCustomValidity("Por favor, insira um número de telefone válido.")
  input.focus()
  return false
}

/**
 * Note: Padrões aceitos:
  1. Data URLs (base64)
  2. Links do Google (lh3.googleusercontent.com)
  3. URLs tradicionais de imagem
 */
function isValidImageUrl(input) {
  if (!input.value.trim()) return true

  const isDataUrl = input.value.startsWith('data:image/')
  const isGoogleUrl = input.value.includes('googleusercontent.com')
  const isTraditionalUrl = /^https?:\/\/.+/i.test(input.value)

  if (isDataUrl || isGoogleUrl || isTraditionalUrl) {
    input.setCustomValidity('')
    return true
  }

  input.setCustomValidity('Formato de imagem inválido. Aceito: Data URL, Google ou URL tradicional.')
  return false
}

function getPhoneRawValue(input) {
  return input.dataset.rawValue || ''
}

function formatType(typeValue) {
  switch (typeValue) {
    case "paper":
      return "Papel"
    case "plastic":
      return "Plástico"
    case "glass":
      return "Vidro"
    case "metal":
      return "Metal"
    case "electronic":
      return "Eletrônico"
    case "battery":
      return "Bateria"
    default:
      throw new Error("Tipo inválido")
  }
}
