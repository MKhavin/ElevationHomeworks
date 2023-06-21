const StringFormatter = function () {
    const capitalizeFirst = function (str) {
        return str.toUpperCase()[0] + str.slice(1).toLowerCase()
    }

    const toSkewerCase = function (str) {
        return str.replace(" ", "-")
    }

    return {
        capitalizeFirst,
        toSkewerCase
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box