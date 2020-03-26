let Phone=function (pin,inbox,outbox) {
    this.pin=pin;
    this.inbox=inbox;
    this.outbox=outbox;

    this.chager=function () {
        this.pin++;
    }
    this.getMessage=function (moble,text) {
        this.inbox+=" "+text;

    }
    this.sendMessage=function (moble,text) {
        moble.outbox+=" "+text;

    }
}