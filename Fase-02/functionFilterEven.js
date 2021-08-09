const arr1 = [1,2,34,6,8,90]

const evenFilter = (arr) => {
	return arr.filter(num => num %2==0)
}


console.log(evenFilter(arr1))

module.exports = {
    evenFilter
}