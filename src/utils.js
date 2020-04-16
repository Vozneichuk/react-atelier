export let location = window.location.pathname

export const handleLocation = () => {
	console.log(location)
	if(location === '/contact'){
		return location = '/'
	}
	else{
		return location = '/contact'
	}
}

export const resetLocation = () => {
	console.log(location)
	return location = '/'
}
