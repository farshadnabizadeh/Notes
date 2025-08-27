#include"mainwindow.h"
#include <QApplication>
#include <QPushButton>
#include <QWidget>
#include <QVBoxLayout>

int main(int argc,char *argv[]) {
    QApplication app(argc,argv);

    QWidget window;
    window.setWindowTitle("Qt5 Layout Demo");

    QVBoxLayout *layout = new QVBoxLayout;

    QPushButton *button1 = new QPushButton(QStringLiteral("Button-1"));
    QPushButton *button2 = new QPushButton(QStringLiteral("Button-2"));
    QPushButton *button3 = new QPushButton(QStringLiteral("Button-3"));

    layout->addWidget(button1);
    layout->addWidget(button2);
    layout->addWidget(button3);

    window.setLayout(layout);
    window.show();

    return app.exec();
}
