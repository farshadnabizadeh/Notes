#include "mainwindow.h"
#include "QApplication"
#include "QPushButton"
#include "QWidget"
#include "QString"
#include "QVBoxLayout"

int main(int argc,char *argv[]){

    QApplication app(argc,argv);

    QWidget window;

    window.setWindowTitle("QT5");

    QVBoxLayout layout;

    QPushButton button1(QString("Button-1"));
    QPushButton button2(QString("Button-2"));
    QPushButton button3(QString("Button-3"));

    layout.addWidget(&button1);
    layout.addWidget(&button2);
    layout.addWidget(&button3);

    window.setLayout(&layout);
    window.show();
    int Result = app.exec();

    return Result;
}
