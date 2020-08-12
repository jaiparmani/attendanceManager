# Generated by Django 3.1 on 2020-08-08 08:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0006_delete_subjects'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subjects',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subjectId', models.IntegerField(unique=True)),
                ('subjectName', models.CharField(max_length=50)),
                ('noOfLecturesAttended', models.IntegerField()),
                ('noOfLecturesNotAttended', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apis.user')),
            ],
        ),
    ]
