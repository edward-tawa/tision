# Generated by Django 5.1.1 on 2024-09-27 16:22

import tision.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tision', '0007_alter_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=tision.models.Post.upload_to),
        ),
    ]
