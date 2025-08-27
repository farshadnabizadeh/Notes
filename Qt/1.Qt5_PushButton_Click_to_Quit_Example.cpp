#include "mainwindow.h"
#include <QApplication>
#include <QPushButton>
int main(int argc, char *argv[])
{
    QApplication app(argc,argv);

    QPushButton button("Hello World");
    button.resize(200,50);
    button.show();

    QObject::connect(&button,&QPushButton::clicked,&app,&QApplication::quit);

    return app.exec();
}
