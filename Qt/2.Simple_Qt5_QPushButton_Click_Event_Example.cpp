#include "mainwindow.h"
#include"QApplication"
#include"QPushButton"

int main(int argc,char* argv[]){

    QApplication app(argc,argv);

    QPushButton button("Click Me");
    button.resize(200,50);
    button.show();
    QObject::connect(&button,&QPushButton::clicked,[&](){
       button.setText("Hey , I'm Here");
    });
    return app.exec();
}
