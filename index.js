// Your code here

function createEmployeeRecord(record){
    let testEmployee = {
        firstName:  record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return testEmployee
}

function createEmployeeRecords (arrays){
    return arrays.map(x=>createEmployeeRecord(x))
}

function createTimeInEvent(record, timeSt){
    const [dateIn , time] = timeSt.split(' ')
    const clockIn = {
        type:'TimeIn',
        hour:parseInt(time),
        date: dateIn
    }
    record.timeInEvents.push(clockIn)
    return record
 }

 function createTimeOutEvent(record, timeSt){
    const [dateOut, time] = timeSt.split(' ')
    const clockOut = {
        type: "TimeOut", 
        hour: parseInt(time), 
        date: dateOut
    }
    record.timeOutEvents.push(clockOut)
    return record
 }

 function hoursWorkedOnDate(record, datestamp){
     const recordIn = record.timeInEvents.find(inEvent=>inEvent.date === datestamp);
     const recordOut = record.timeOutEvents.find(outEvent=>outEvent.date === datestamp);
     return (recordOut.hour - recordIn.hour)/100
 }

 function wagesEarnedOnDate(record, datestamp){
    const recordIn = record.timeInEvents.find(inEvent=>inEvent.date === datestamp);
    const recordOut = record.timeOutEvents.find(outEvent=>outEvent.date === datestamp);
    const rate = record.payPerHour
    return (recordOut.hour - recordIn.hour)/100 * rate
}


function allWagesFor(employeeObj){
    let hrsWorked =[] 
    let totalHours
    for(let i =0;i<employeeObj.timeInEvents.length; i++)

    if(employeeObj.timeInEvents[i].date === employeeObj.timeOutEvents[i].date){
        hrsWorked.push((employeeObj.timeOutEvents[i].hour-employeeObj.timeInEvents[i].hour)/100)
    };
     totalHours = hrsWorked.reduce((a, b) => {
        return (a + b);
      })
      return totalHours*employeeObj.payPerHour
    
}

function calculatePayroll(recordsArray){
    let employeeWages = []
    let payrollCost=

    recordsArray.forEach(element=>employeeWages.push(allWagesFor(element)));
    payrollCost = employeeWages.reduce((a, b) => {
        return (a + b);
      })
      return payrollCost
    }