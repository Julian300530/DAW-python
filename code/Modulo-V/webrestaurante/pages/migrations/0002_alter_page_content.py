# Generated by Django 5.0.6 on 2024-07-17 02:00

import django_ckeditor_5.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='page',
            name='content',
            field=django_ckeditor_5.fields.CKEditor5Field(verbose_name='Contenido'),
        ),
    ]