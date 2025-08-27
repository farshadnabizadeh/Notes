#include "mainwindow.h"
#include <QApplication>
#include <QPushButton>
#include <QTimer>
#include <QString>
#include <QDebug>

int main(int argc, char *argv[])
{
    QApplication *app = new QApplication(argc, argv); // Heap-based

    QPushButton *button = new QPushButton(QStringLiteral("Hello-world")); // Heap-based
    button->resize(200, 200);
    button->setText(QStringLiteral("Click Me"));
    button->show();

    
    qDebug() << "QApplication Heap address:" << app;

    QObject::connect(button, &QPushButton::clicked, [=]{
        button->setText(QStringLiteral("Text_is_Test"));
        QTimer::singleShot(2000, app, &QApplication::quit); 
    });

    int result = app->exec();

    delete button;
    delete app;
    return result;
}
