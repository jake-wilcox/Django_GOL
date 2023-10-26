from django.db import models
# Create your models here.

#This way of keeping track of shapes and their cells feels kind of weird. senior engineers wanted

#Cell Table Fields: CellID, X, Y
#We Only need to keep track of alive cells
class Cell(models.Model):
    x = models.IntegerField()
    y = models.IntegerField()

#Shape Table Fields: ShapeID, Name, Description, GridSizeX, GridSizeY
class Shape(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    gridSizeX = models.IntegerField()
    gridSizeY = models.IntegerField()
    cells = models.ManyToManyField(Cell, through='ShapeCellRelationship')

    def __str__(self):
        return self.name


#ShapeCellRelationship Fields: ShapeID, CellID
class ShapeCellRelationship(models.Model):
    shape = models.ForeignKey(Shape, on_delete=models.CASCADE)
    Cell = models.ForeignKey(Cell, on_delete=models.CASCADE)
