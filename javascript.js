let taskno = 1;

const remove = () =>{
    document.querySelector('.taskinfosection').remove()
}

const logic = () =>{
    const mainsection = document.querySelector('.tasklists')
    let valueoftask = document.querySelector('#taskenter').value

    console.log(valueoftask) //Shows if its working properly or not

    //Creating all of the div
    let taskinfosection = document.createElement('div')
    taskinfosection.setAttribute('class', 'taskinfosection')

    let header = document.createElement('div');
    header.setAttribute('class', 'taskno') //append to the taskinfosection
    header.textContent = 'Task ' + taskno ;

    let actualtasksection = document.createElement('div'); //append to the taskinfosection
    actualtasksection.setAttribute('class', 'actualtasksection')
    

    let tasktext = document.createElement('div') //append to actualtasksection
    tasktext.setAttribute('class', 'tasktext')
    tasktext.textContent = valueoftask;


    let removetask = document.createElement('button') //append to actualtasksection
    removetask.setAttribute('class', 'removetask')
    removetask.setAttribute('id', 'no'+taskno)
    removetask.setAttribute('onclick', 'remove()')
    removetask.textContent = '❌'

    mainsection.append(taskinfosection)
    taskinfosection.append(header)
    taskinfosection.append(actualtasksection)
    actualtasksection.append(tasktext)
    actualtasksection.append(removetask)

    taskno++
}