#include "mainwindow.h"
#include <QApplication>
#include <QPushButton>
#include <QTimer>
#include <QString>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QPushButton button(QStringLiteral("Hello-world"));
    button.resize(200, 200);
    button.setText(QStringLiteral("Click Me"));
    button.show();

    QObject::connect(&button, &QPushButton::clicked, [&]{
        button.setText(QStringLiteral("THIS IS QTimer Example"));
        QTimer::singleShot(2000, &app, &QApplication::quit);
    });

    return app.exec();
}
