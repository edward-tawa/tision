# Generated by Django 5.1.1 on 2024-10-02 04:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tision', '0014_alter_post_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='bio',
            field=models.TextField(blank=True),
        ),
    ]
