# CAPTIONS POC

To test 6 different techniques:

1. track element in **HTML** with vtt src [commented in the code]

2. track element in **HTML** with ttml src [commented in the code]

3. track element created and added from **JS** with vtt [button VTT]

4. track element created and added from **JS** with ttml (fetch the content and then use a blob) [button TTML]

5. track element created and added from **JS** with vtt (fetch the content and then use a blob) [button VTT BLOB]

6. track element created and added from **JS** with ttml converted on the fly in vtt (fetch the content, convert ttml to vtt, and then use a blob) [button TTML2VTT]

## Chrome browser (tested on v134):

1. OK
2. **NOT OK**
3. OK
4. **NOT OK**
5. OK
6. OK

## Try online

[DEMO GITHUB.IO](https://cnt000paramount.github.io/track-example/)
