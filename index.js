/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    let newPerson = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return newPerson
}

function createEmployeeRecords(array) {
    return array.map(x => createEmployeeRecord(x))
}

function createTimeInEvent(time) {
    let timeArray = time.split(' ')
    let timeObject = {
        type: "TimeIn",
        hour: timeArray[1],
        date: timeArray[0]
    }
    return timeObject;
}

function createTimeInEvent(time) {
    
    let event = {type: "TimeIn", date: time.split(" ")[0], hour: parseInt(time.split(" ")[1])}
    this.timeInEvents.push(event)
    
    return this
}

function createTimeOutEvent(time) {
    let event = {type: "TimeOut", date: time.split(" ")[0], hour: parseInt(time.split(" ")[1])}
    this.timeOutEvents.push(event)
    return this
}

function hoursWorkedOnDate(record) {
    let timeIn = this.timeInEvents.find(x => x.date === record)
    let timeOut = this.timeOutEvents.find(x => x.date === record)

    let hours = (timeOut.hour - timeIn.hour) / 100
    return hours
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    let wage = this.payPerHour
    return wage * hours
}

function calculatePayroll(employees) {
    let total = 0
    employees.forEach(employee => {
         total += allWagesFor.call(employee)
    })
    return total
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(x => x.firstName === firstName)
}