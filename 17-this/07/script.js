//getFullName()=>"firstName lastName"
//setFullName("fullName")=> ["firstName", "lastName"]

//алго
//1.создаем обьект со свойствами и методами
//2. в методе getFullname выводим (возвращаем) значение "имени" и "фамилии"
//3. в методе setFullName:  разбиваем строку на массив и в 0 индекс массива записываем "имя",
// в 1-й индекс - "фамилия". Возврашаем массив отдельных строк


const user={
    firstName:"John",
    lastName:"Doe",
    getFullName: function() {
        return(`${this.firstName} ${this.lastName}`)
    },
    setFullName: function(name) {
        let nameArray= name.split(" ")
        this.firstName= nameArray[0]
        this.lastName= nameArray[1]
        return nameArray
    }
}



